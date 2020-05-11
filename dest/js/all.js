window.addEventListener(
    "load",
    function () {
        var Left_btn = document.querySelectorAll(".Left_btn")
        var Right_btn = document.querySelectorAll(".Righit_btn")
        var Right_btn_length = document.querySelectorAll(".Righit_btn").length
        var Left_btn_length = document.querySelectorAll(".Left_btn").length
        var Read_cardSpac_div = document.querySelectorAll(".read_cardSpac")

        // 點點控制鈕變數
        var read_cardSpac = document.querySelector(".read_cardSpac")
        var read_cardSpac_div = read_cardSpac.getElementsByClassName("space").length
        var p_space = document.querySelector(".p_space")

        // 點點控治鈕
        for (let i = 0; i < read_cardSpac_div; i++) {
            // 動態新增li標籤 （用來做點點控制鈕）
            var li = document.createElement("li")
            li.setAttribute("class", "clickMe")
            p_space.appendChild(li)
        }

        // 註冊事件處理
        for (let i = 0; i < read_cardSpac_div; i++) {
            var clickMe = document.querySelectorAll(".clickMe")
            clickMe[i].onclick = function () {
                alert(i)
            }
        }

        // 左按鈕
        for (let i = 0; i < Left_btn_length; i++) {
            let num = 0
            Left_btn[i].onclick = function (e) {
                let width = 1550
                num++
                console.log(num)

                Read_cardSpac_div[i].style.left = -width * num + "px"
                Right_btn[i].disabled = false
                if (num >= read_cardSpac_div - 1) {
                    Left_btn[i].disabled = true
                }
            }

            Right_btn[i].onclick = function () {
                let width = 1550
                num--
                console.log(num)

                Read_cardSpac_div[i].style.left = -width * num + "px"
                Left_btn[i].disabled = false
                if (num == 0) {
                    Right_btn[i].disabled = true
                }
            }
        }
    },
    false
)
