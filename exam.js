function exam() {
    var score = 0;
    var className = document.getElementById("className").value;
    var studentNumber = document.getElementById("studentNumber").value;
    var studentName = document.getElementById("studentName").value;

    if (className === null || className === "") {
        alert("班级不能为空");
    }
    else if (studentNumber === null || studentNumber === "") {
        alert("学号不能为空");
    }
    else if (studentName === null || studentName === "") {
        alert("姓名不能为空");
    }
    else {
        if (document.getElementById("fill-in-1").value === "统一建模语言") {
            score += 15;
        }
        var fill2 = document.getElementsByName("fill-in-2");
        if (fill2[0].value === "封装性" && fill2[1].value === "继承性" && fill2[2].value === "多态性") {
            score += 15;
        }

        var choice1 = document.getElementsByName("choice-1");
        if (choice1[1].checked == true) {
            score += 5;
        }
        var choice2 = document.getElementsByName("choice-2");
        if (choice2[0].checked == true) {
            score += 5;
        }

        var multipleChoice1 = document.getElementsByName("multiple-choice-1");
        if (multipleChoice1[0].checked == true && multipleChoice1[1].checked == true && multipleChoice1[3].checked == true) {
            score += 10;
        }
        var multipleChoice2 = document.getElementsByName("multiple-choice-2");
        if (multipleChoice2[0].checked == true && multipleChoice2[1].checked == true && multipleChoice2[2].checked == true) {
            score += 10;
        }

        var judgment1 = document.getElementsByName("judgment-1");
        if (judgment1[1].checked == true) {
            score += 10;
        }
        var judgment2 = document.getElementsByName("judgment-2");
        if (judgment2[0].checked == true) {
            score += 10;
        }

        if (document.getElementsByName("answer-1").value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式") {
            score += 20;
        }

        document.getElementById("score").value = score;
    }
}
