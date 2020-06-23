// //DBの名前を定義する。
// const demoDbName = "demoIndexedDB";

// //バージョン この数値が以前の数値より高ければ、更新用のメソッドが動く。
// //現在の日付にしておけば管理しやすいと思います。
// const version = 201903021640;

// //DBのオープン（DB名とバージョンを渡す）
// const openReq = indexedDB.open(demoDbName, version);

// //objectStoreNames
// const fruitsStoreName = "Fruits";

// //更新するごとに実行
// openReq.onupgradeneeded = (event) => {
//     //DBの定義
//     const openedDB = event.target.result;
    
//     //オブジェクトストアの削除
//     openedDB.deleteObjectStore(fruitsStoreName);
// };

// //DBを削除
// const deleteReq  = indexedDB.deleteDatabase(demoDbName);
// deleteReq.onsuccess = function(event){
//     console.log('db delete success');
//     console.log(event);
//     // 存在しないDB名を指定してもこっちが実行される
//   }

// //データの挿入
// openReq.onsuccess = (event) => {
//   //onupgradeneededの後に実行。更新がない場合はこれだけ実行
//   console.log("db open success");
//   const openedDB = event.target.result;

//   //試しに挿入するデータ
//   const fruitData = { name: "banana", price: 150 };
//   //transaction
//   const trans = openedDB.transaction(fruitsStoreName, "readwrite");
//   //store
//   const store = trans.objectStore(fruitsStoreName);
//   //挿入、編集のリクエストをする（addにすれば挿入のみ）
//   const putReq = store.put(fruitData);
//   //データの挿入成功時に実行
//   putReq.onsuccess = (event) => {
//     console.log(event.target.result, "データ挿入成功");
//   };
//   //putReq.onsuccessの後に実行
//   trans.oncomplete = () => {
//     console.log("transaction完了");
//   };

//   //削除部分
//   //引数には削除したいkeyを指定してください。この場合id:1を削除です
//   const delReq = store.delete(1);

//   delReq.onsuccess = (event) => {
//     console.log(event.target.result, "削除部分");
//   };

//   //get部分
//   //引数には取得したいkeyを指定してください。この場合id:4を取得です
//   const getReq = store.get(4);

//   getReq.onsuccess = (event) => {
//     console.log(event.target.result, "get部分");
//   };

//   // 接続を解除する
//   openedDB.close();
// };
