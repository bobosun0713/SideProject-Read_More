window.addEventListener(
    "load",
    function () {
        let num = 0
        var Left_btn = document.querySelector(".Left_btn")
        var Right_btn = document.querySelector(".Righit_btn")
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
        // for (let i = 1; i <= read_cardSpac_div; i++) {
        var clickMe = document.querySelector(".clickMe")
        // }
        clickMe.onclick = function () {
            alert("1")
        }
        // 左按鈕
        Left_btn.onclick = function () {
            let width = 1550
            num++
            read_cardSpac.style.left = -width * num + "px"
            Right_btn.disabled = false
            if (num >= 4) {
                Left_btn.disabled = true
            }
        }
        // 右按鈕
        Right_btn.onclick = function () {
            let width = 1550
            num--

            read_cardSpac.style.left = -width * num + "px"
            Left_btn.disabled = false
            if (num == 0) {
                Right_btn.disabled = true
            }
        }
    },
    false
)

function a() {
    function c() {
        console.log(b)
    }
    var b = 3
    c()
}
