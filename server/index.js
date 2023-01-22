const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES for the user table//

//create a userinfo
app.post("/users", async (req, res) => {
    try {
        const userid = req.body.userId;
        const userpw = req.body.userPw;

        const existingUser = await pool.query("SELECT * FROM userInfo WHERE userid = $1", [userid]);
        console.log(existingUser);
        if (existingUser.rows[0]) {
            res.json({ message: "User exists!" });
        } else {

            const newUser = await pool.query("INSERT INTO userInfo(userid, userpw) VALUES($1, $2) RETURNING *",
                [userid, userpw]
            );

            res.json({ message: newUser.rows[0] + "Success!" });
        }

    } catch (err) {
        console.log(err.message);
    }
})

//get all userinfos
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM userinfo");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a userinfos

app.post("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT userpw FROM userinfo WHERE userid = $1", [id]);
        if (!(user.rows[0])) {
            res.json({ message: "User does not exist" });
        } else {
            console.log(user.rows[0]);
            res.json(user.rows[0]);
        }
    } catch (err) {
        console.log(err.message);
    }
})

//update a userinfo
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userid } = req.body;
        const updateTodo = await pool.query(
            "UPDATE userinfo SET userid = $1 WHERE id = $2", [userid, id]);

        res.json("User Id was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a userid

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM userinfo WHERE id = $1", [id]);
        res.json("Todo was deleted");
    } catch (err) {
        console.log(err.message);
    }
})

//ROUTES for the expense table
//save a expense
app.post("/expenses", async (req, res) => {
    try {
        const amount = req.body.amount;
        const title = req.body.title;
        const type = req.body.type;
        const userName = req.body.userid;

        const foundUser = await pool.query("SELECT * FROM expense WHERE userid = $1 AND title = $2",
            [userName, title]
        );
        if (foundUser.rows[0] == undefined) {
            const newList = await pool.query("INSERT INTO expense(type, title, amount, userid) VALUES($1, $2, $3, $4) RETURNING *",
                [type, title, amount, userName]
            );
            res.json({ message: "Success" });
        } else {
            res.json({ message: "Please Enter a different expense name. This expense name exists" });
        }

    } catch (err) {
        console.log(err.message);
    }
})

app.post("/expensesAmount", async (req, res) => {
    try {
        const id1 = req.body.userId;
        let fAmount = 0;
        let aAmount = 0;
        let rAmount = 0;
        let mAmount = 0;
        let total = 0;

        // console.log(id1);

        const user = await pool.query("SELECT * FROM expense WHERE userid = $1", [id1]);
        if (!(user.rows)) {
            res.json({ message: "None" });
        } else {
            const fQuery = await pool.query("SELECT amount FROM expense WHERE userid = $1 AND type = $2", [id1, "Food"]);
            const aQuery = await pool.query("SELECT amount FROM expense WHERE userid = $1 AND type = $2", [id1, "Apparel"]);
            const rQuery = await pool.query("SELECT amount FROM expense WHERE userid = $1 AND type = $2", [id1, "Housing"]);
            const mQuery = await pool.query("SELECT amount FROM expense WHERE userid = $1 AND type = $2", [id1, "Misc"]);

            for (let i = 0; i < fQuery.rows.length; i++) {
                fAmount += parseInt(fQuery.rows[i].amount);
            }
            for (let i = 0; i < aQuery.rows.length; i++) {
                aAmount += parseInt(aQuery.rows[i].amount);
            }
            for (let i = 0; i < rQuery.rows.length; i++) {
                rAmount += parseInt(rQuery.rows[i].amount);
            }
            for (let i = 0; i < mQuery.rows.length; i++) {
                mAmount += parseInt(mQuery.rows[i].amount);
            }

            total = fAmount + aAmount + rAmount + mAmount;

            res.json({ food: fAmount, clothes: aAmount, rent: rAmount, misc: mAmount, tot: total });
        }
    } catch (err) {
        console.log(err.message);
    }
});

app.put("/expenses/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { userid } = req.body;
        const updateTodo = await pool.query(
            "UPDATE userinfo SET userid = $1 WHERE id = $2", [userid, id]);

        res.json("User Id was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000")
});