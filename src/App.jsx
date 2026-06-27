import { useState } from 'react'
import Tables from './pages/Tables'

export default function App(){

  const [page,setPage] = useState('dashboard')

  const [categories] = useState([

    {
      id:1,
      name:'☕ مشروبات ساخنة'
    },

    {
      id:2,
      name:'🥤 مشروبات باردة'
    },

    {
      id:3,
      name:'🍒 أراكيل'
    },

    {
      id:4,
      name:'🍰 حلويات'
    },

    {
      id:5,
      name:'🍟 مأكولات'
    },

    {
      id:6,
      name:'🎮 ألعاب'
    }

  ])

  return(

    <div
      style={{
        display:'flex',
        height:'100vh',
        fontFamily:'Arial'
      }}
    >

      <div
        style={{
          width:'250px',
          background:'#1b1b1b',
          color:'white',
          padding:'20px'
        }}
      >

        <h2>كرز 🍒</h2>

        <div
          style={{padding:'12px',cursor:'pointer'}}
          onClick={()=>setPage('dashboard')}
        >
          Dashboard
        </div>

        <div
          style={{padding:'12px',cursor:'pointer'}}
          onClick={()=>setPage('tables')}
        >
          الطاولات
        </div>

        <div
          style={{padding:'12px',cursor:'pointer'}}
          onClick={()=>setPage('menu')}
        >
          المنيو
        </div>

      </div>

      <div
        style={{
          flex:1,
          padding:'25px',
          background:'#f5f5f5'
        }}
      >

        {

          page === 'dashboard'

          ?

          <h1>Dashboard</h1>

          :

          page === 'tables'

          ?

          <Tables />

          :

          <div>

            <h1>الأقسام</h1>

            {

              categories.map(category=>(

                <div
                  key={category.id}
                  style={{
                    background:'white',
                    marginBottom:'15px',
                    padding:'20px',
                    borderRadius:'10px'
                  }}
                >

                  {category.name}

                </div>

              ))

            }

          </div>

        }

      </div>

    </div>

  )

}