const mongoose = require("mongoose");

// 모듈을 export 하여 다른 서비스에서도 사용 가능
module.exports = () => {
    const connect = () => {
        if(process.env.NODE_ENV !== "production") {
            mongoose.set("debug", true);
        }
        mongoose.connect(
            "mongodb://localgost27017/til",
            {
                dbName: "til"
            },
            error => {
                if (error) {
                    console.log("mongodb connect error", error);
                } else {
                    console.log("mongodb connect success");
                }
            }
        )
    };
    connect();
    
    mongoose.connection.on("error", error => {
        console.log("mongodb connect error", error);
    });
    mongoose.connection.on("disconnected", () => {
        console.log("mongodb is disconnected. reconnecting");
        connect();
    });
    require("./user")
    require("./board")
};
