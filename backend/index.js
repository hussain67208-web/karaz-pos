import express from 'express'
import cors from 'cors'

import db from './database.js'

const app = express()

app.use(cors())
app.use(express.json())

// =====================
// الطاولات
// =====================

app.get('/tables',(req,res)=>{

    db.all(
        'SELECT * FROM tables ORDER BY id',
        [],
        (err,rows)=>{

            if(err){

                return res.status(500).json(err)

            }

            res.json(rows)

        }
    )

})

// =====================
// المنيو
// =====================

app.get('/menu',(req,res)=>{

    db.all(

        'SELECT * FROM menu_items ORDER BY category,name',

        [],

        (err,rows)=>{

            if(err){

                return res.status(500).json(err)

            }

            res.json(rows)

        }

    )

})

// =====================

app.listen(3000,'0.0.0.0',()=>{

    console.log('🚀 Karaz Backend Started')

})