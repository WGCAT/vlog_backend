const mongoose = require("mongoose");

// 모듈을 export 하여 다른 서비스에서도 사용 가능
module.exports = () => {
    const connect = async () => {
        try {
            if (process.env.NODE_ENV !== "production") {
                mongoose.set("debug", true);
            }

            await mongoose.connect("mongodb://localhost:27017/vlog", {
                dbName: "vlog",
            });
            console.log("MongoDB 연결 성공");
        } catch (error) {
            console.error("MongoDB 연결 실패:", error);
        }
    };
    connect();
    
mongoose.connection.on("error", error => {
    console.log("mongodb connect error", error);
});

mongoose.connection.on("disconnected", () => {
    console.log("mongodb is disconnected. reconnecting");
    connect();
});

require("./users")
require("./boards")

};
