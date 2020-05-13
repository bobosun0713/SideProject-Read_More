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
        var p_space = document.querySelectorAll(".p_space")
        var p_space_length = document.querySelectorAll(".p_space").length

        // 點點控治鈕
        for (let i = 0; i < read_cardSpac_div; i++) {
            // 動態新增li標籤 （用來做點點控制鈕）
            var li_1 = document.createElement("li")
            li_1.setAttribute("class", "clickMe")
            var li_2 = document.createElement("li")
            li_2.setAttribute("class", "clickMe1")

            p_space[0].appendChild(li_1)
            p_space[1].appendChild(li_2)
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
            let a = 0
            clickMe[a].style.background = "red"
            Left_btn[i].onclick = function () {
                let width = 1550
                a++
                num++
                if (num <= read_cardSpac_div - 1) {
                    Read_cardSpac_div[i].style.left = -width * num + "px"
                    Right_btn[i].disabled = false

                    // 點點顏色提示
                    // console.log(a)
                    if (a <= read_cardSpac_div - 1) {
                        clickMe[a].style.background = "red"
                        clickMe[a - 1].style.background = ""
                    }
                } else if (num > read_cardSpac_div - 1) {
                    Read_cardSpac_div[i].style.left = 0 + "px"
                    // 當num大於卡片內容數 最後點點顏色消失
                    clickMe[4].style.background = ""
                    // 這時回到第一張 手動讓點點顏色回到最初顏色
                    clickMe[0].style.background = "red"
                    num = 0
                    a = 0
                }
            }

            Right_btn[i].onclick = function () {
                let width = 1550
                num--
                Read_cardSpac_div[i].style.left = -width * num + "px"
                Left_btn[i].disabled = false
                if (num < 0) {
                    num = 4
                    Read_cardSpac_div[i].style.left = -width * num + "px"
                } else if (num > 0) {
                    Read_cardSpac_div[i].style.left = -width * num + "px"
                }
            }
        }
    },
    false
)
