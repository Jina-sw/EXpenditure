const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body
 
//ROUTES//

//create a userinfo
app.post("/users", async(req, res)=> {
    try{
        const { userid } = req.body;
        const newUser = await pool.query("INSERT INTO userInfo(userid) VALUES($1) RETURNING *", 
        [userid]
    );

    res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//get all userinfos
app.get("/users", async(req,res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM userinfo");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a userinfos

app.get("/users/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM userinfo WHERE id = $1", [id]);
        res.json(user.rows);
    } catch(err) {
        console.log(err.message);
    }
})

//update a userinfo
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userid } = req.body;
        const updateTodo = await pool.query(
            "UPDATE userinfo SET userid = $1 WHERE id = $2", [userid, id] );

        res.json("User Id was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a userid

app.delete("/users/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const deleteUser = await pool.query("DELETE FROM userinfo WHERE id = $1", [id]);
        res.json("Todo was deleted");
    } catch (err) {
        console.log(err.message);
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
});