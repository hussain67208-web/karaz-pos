import { useEffect, useState } from "react";
import axios from "axios";

export default function Tables() {

  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTables();
    loadMenu();
  }, []);

  async function loadTables() {

    try {

      const res = await axios.get("http://localhost:3000/tables");

      setTables(res.data);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  }

  async function loadMenu() {

    try {

      const res = await axios.get("http://localhost:3000/menu");

      setMenu(res.data);

    } catch (err) {

      console.log(err);

    }

  }

  async function openTable(id){

    try{

      await axios.post(
        "http://localhost:3000/table/open",
        {
          id
        }
      );

      loadTables();

    }catch(err){

      console.log(err);

    }

  }

  async function closeTable(id){

    try{

      await axios.post(
        "http://localhost:3000/table/close",
        {
          id
        }
      );

      loadTables();

      setSelectedTable(null);

    }catch(err){

      console.log(err);

    }

  }

  async function addItem(product){

    if(!selectedTable) return;

    try{

      await axios.post(
        "http://localhost:3000/order/add",
        {

          table:selectedTable.id,

          product:product.id

        }
      );

      alert("تمت إضافة الطلب");

    }catch(err){

      console.log(err);

    }

  }

  if(loading){

      return (

    <div style={{padding:"20px"}}>

      <h1>الطاولات</h1>

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"15px"
        }}
      >

        {tables.map(table=>(

          <div
            key={table.id}
            onClick={()=>setSelectedTable(table)}
            style={{
              background:"white",
              borderRadius:"12px",
              padding:"20px",
              cursor:"pointer",
              boxShadow:"0 0 8px rgba(0,0,0,.08)"
            }}
          >

            <h2>{table.name}</h2>

            <p>القسم : {table.section}</p>

            <h3>

              {

                table.status==="empty"

                ?

                "🟢 فارغة"

                :

                "🔴 مشغولة"

              }

            </h3>

            {

              table.status==="empty"

              ?

              <button onClick={(e)=>{

                e.stopPropagation();

                openTable(table.id);

              }}>

                فتح

              </button>

              :

              <button onClick={(e)=>{

                e.stopPropagation();

                closeTable(table.id);

              }}>

                إغلاق

              </button>

            }

          </div>

        ))}

      </div>

      {

        selectedTable && (

          <div
            style={{
              marginTop:"30px",
              background:"white",
              padding:"20px",
              borderRadius:"12px"
            }}
          >

            <h2>

              طلبات الطاولة {selectedTable.name}

            </h2>

            <hr/>

            <h3>المنيو</h3>

            <div
              style={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                gap:"10px"
              }}
            >

              {

                menu.map(item=>(

                  <button

                    key={item.id}

                    onClick={()=>addItem(item)}

                    style={{

                      padding:"15px",

                      borderRadius:"10px",

                      cursor:"pointer"

                    }}

                  >

                    <b>{item.name}</b>

                    <br/>

                    {item.price} د.ع

                  </button>

                ))

              }

            </div>

          </div>

        )

      }

    </div>

  );

}