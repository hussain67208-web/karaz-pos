CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS categories(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1
);

CREATE TABLE IF NOT EXISTS products(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  category_id INTEGER,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  image TEXT,
  available INTEGER DEFAULT 1,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS tables(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  section TEXT NOT NULL,
  status TEXT DEFAULT 'empty'
);

CREATE TABLE IF NOT EXISTS orders(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  table_id INTEGER,
  status TEXT DEFAULT 'open',
  total REAL DEFAULT 0,
  created_at TEXT,
  closed_at TEXT,
  FOREIGN KEY(table_id) REFERENCES tables(id)
);

CREATE TABLE IF NOT EXISTS order_items(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER,
  product_id INTEGER,
  quantity INTEGER DEFAULT 1,
  price REAL,
  notes TEXT,
  FOREIGN KEY(order_id) REFERENCES orders(id),
  FOREIGN KEY(product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS hookah_preparation(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  flavor TEXT,
  prepared INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS attendance(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id INTEGER,
  check_in TEXT,
  check_out TEXT
);

CREATE TABLE IF NOT EXISTS billiard_tables(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  games INTEGER DEFAULT 0,
  minutes INTEGER DEFAULT 0,
  total REAL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS billiard_sessions(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  table_id INTEGER,
  started_at TEXT,
  ended_at TEXT,
  games INTEGER DEFAULT 0,
  minutes INTEGER DEFAULT 0,
  total REAL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS billiard_cameras(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  table_id INTEGER,
  camera_index INTEGER
);

CREATE TABLE IF NOT EXISTS menu_items(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  category TEXT,
  price REAL,
  available INTEGER DEFAULT 1
);

INSERT INTO tables(name,section,status)
SELECT 'A1','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A1');

INSERT INTO tables(name,section,status)
SELECT 'A2','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A2');

INSERT INTO tables(name,section,status)
SELECT 'A3','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A3');

INSERT INTO tables(name,section,status)
SELECT 'A4','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A4');

INSERT INTO tables(name,section,status)
SELECT 'A5','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A5');

INSERT INTO tables(name,section,status)
SELECT 'A6','الصالة','empty'
WHERE NOT EXISTS(SELECT 1 FROM tables WHERE name='A6');

INSERT INTO menu_items(name,category,price)
SELECT 'شاي','مشروبات ساخنة',1000
WHERE NOT EXISTS(SELECT 1 FROM menu_items WHERE name='شاي');

INSERT INTO menu_items(name,category,price)
SELECT 'قهوة تركية','مشروبات ساخنة',3000
WHERE NOT EXISTS(SELECT 1 FROM menu_items WHERE name='قهوة تركية');

INSERT INTO menu_items(name,category,price)
SELECT 'اسبريسو','مشروبات ساخنة',3500
WHERE NOT EXISTS(SELECT 1 FROM menu_items WHERE name='اسبريسو');

INSERT INTO menu_items(name,category,price)
SELECT 'بيبسي','مشروبات باردة',2000
WHERE NOT EXISTS(SELECT 1 FROM menu_items WHERE name='بيبسي');

INSERT INTO menu_items(name,category,price)
SELECT 'أركيلة تفاحتين','أركيلة',7000
WHERE NOT EXISTS(SELECT 1 FROM menu_items WHERE name='أركيلة تفاحتين');