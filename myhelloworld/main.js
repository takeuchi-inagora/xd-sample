const {Text, Color} = require("scenegraph"); // XD拡張APIのクラスをインポート

function helloHandlerFunction(selection) { // メインのファンクション
  console.log("my function is called!"); // Developer Consoleに出力
  const el = new Text(); // XDのTextクラスからインスタンスを生成
  el.text = "Hello, World!";
  el.styleRanges = [ // テキストのスタイルを設定
    {
      length: el.text.length,
      fill: new Color("#99CC00"),
      fontSize: 24
    }
  ];
  selection.insertionParent.addChild(el); // XDノードツリーにテキストオブジェクトを追加
  el.moveInParentCoordinates(100, 100); // テキストオブジェクトの表示位置を指定

  console.log("文字の色取得" + el.fill.a); // Developer Consoleに出力
  console.log("RootNode has " + selection.items.length + " children");
  //console.log("color " + selection.items[0].fill.a + " =a");

  let application = require("application");
  console.log("Version:", application.version);        // e.g. "13.0.21.3"
  console.log("XD locale:", application.appLanguage);  // e.g. "en"
  console.log("OS locale:", application.systemLocale); // e.g. "en_US"
}

module.exports = { // コマンドIDとファンクションの紐付け
  commands: {
    helloCommand: helloHandlerFunction
  }
};
