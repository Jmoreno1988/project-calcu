var cfg = {
    // Caution !!!
    resetLocalStorage: false,
    isForPaymentVersion: false,

    // Url del servidor
    urlServer: "http://localhost:3000/",

    modelObjectConfig: {},

    modelObjectLocalStorage: {
        progress: {
            mathCalcu: {
                easy: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                },
                normal: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                },
                hard: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                },
                master: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                },
                kids: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                },
                survival: {
                    lastScore: 0,
                    maxScore: 0,
                    blocked: false
                }
            }
        },

        config: {
            isSound: false,
            isEvaluate: false,
            isVibration: true,
            lenguage: "en"
        }
    }
}