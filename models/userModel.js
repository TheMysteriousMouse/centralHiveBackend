const config = require('../config/database');
const pg = require('pg');

const db = new pg.Pool(config);


const userModel = {
    async getUserByUsername(username) {
        const query ={ 
        text: `SELECT * FROM users WHERE username =$1`,
        values: [username]
        }
        try{
            const {rows} = await db.query(query);
            if(rows.length){
                return rows[0]
            }
            return null;
        }catch(err){
            console.error(err.stack);
            throw new Error('Could not find user')
        }
    },
    async addUser(user){
        const query = {
            text: 'INSERT INTO users(email,username,password) VALUES($1,$2,$3) RETURNING *',
            values: [user.email,user.username,user.password]
        }

        try{
            const {rows} = await db.query(query);
            return rows[0];
        }catch(err){
            console.log(err.stack);
            throw new Error('Could not create user')
        }
    },
    async getUserStreams(id) {
        const query = {
            test: 'SELECT stream_id FROM streams WHERE user_id=$1',
            values: [id]
        }
        try{
            const {rows} = await db.query(query);
            if(rows.length){
                return rows;
            }
            return null;
        }
        catch(err){
            console.log(err.stack);
            throw new Error('Could not find the users streams')
        }
    },
   
    async deleteUserByUsername(username) {
        const query = {
            text: 'DELETE FROM users WHERE username=$1 RETURNING *',
            values: [username]
        }
        try{
            const {rows} = await db.query(query);
            if(rows.length){
                return rows;
            }
            return null;
        }
        catch(err){
            console.log(err.stack);
            throw new Error('Could not delete user')
        }
    },
}

module.exports = userModel;
// async setUsersFollowersById(id) {
//     const query = {
//         test: 'INSERT INTO followers() FROM followers WHERE user_id=$1',
//         values: [id]
//     }
    
//     try{
//         const {rows} = await db.query(query);
//         if(rows.length){
//             return rows;
//         }
//         return null;
//     }
//     catch(err){
//         console.log(err.stack);
//         throw new Error('Could not find the users followers')
//     }
// },
// async getUsersFollowersById(id) {
//     const query = {
//         test: 'SELECT follower_id FROM followers WHERE user_id=$1',
//         values: [id]
//     }
    
//     try{
//         const {rows} = await db.query(query);
//         if(rows.length){
//             return rows;
//         }
//         return null;
//     }
//     catch(err){
//         console.log(err.stack);
//         throw new Error('Could not find the users followers')
//     }
// },
// async getUsersFollowingById(id) {
//     const query = {
//         test: 'SELECT user_id FROM followers WHERE follower_id=$1',
//         values: [id]
//     }
//     try{
//         const {rows} = await db.query(query);
//         if(rows.length){
//             return rows;
//         }
//         return null;
//     }
//     catch(err){
//         console.log(err.stack);
//         throw new Error('Could not find the users following')
//     }
// },