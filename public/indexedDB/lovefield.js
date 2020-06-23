import lf from "lovefield";

const dbName = "demoDB";
const version = 201903312056;
const schemaBuilder = lf.schema.create(dbName, version);

schemaBuilder
  .createTable("Fruits")
  .addColumn("id", lf.Type.INTEGER)
  .addColumn("name", lf.Type.STRING)
  .addColumn("price", lf.Type.INTEGER)
  .addColumn("shop_id", lf.Type.INTEGER)
  .addColumn("memo", lf.Type.STRING)
  .addNullable(["shop_id", "memo"])
  .addPrimaryKey(["id"], true);

// schemaBuilder.connect();

schemaBuilder
  .connect()
  .then((db) => {
    //引数dbは、上で定義したdemoDBのこと

    //ストア（テーブル）
    const fruitsStore = db.getSchema().table("Fruits");

    //登録したいデータ
    const banana = {
      name: "banana",
      price: 140,
      shop_id: 1,
      memo: "ものすごく甘いバナナです",
    };

    //データを準備
    const firstFruit = fruitsStore.createRow(banana);

    //クエリ（命令）
    const createFirstFruit = db
      .insertOrReplace()
      .into(fruitsStore)
      .values([firstFruit]);
    //実行
    return createFirstFruit.exec();
  })
  .then((data) => {
    //登録したデータをコンソールに表示
    console.log(data);
  });
