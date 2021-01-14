var calcBtn = document.getElementById('calc');
var firstIn = document.getElementById('first-in');
var secondIn = document.getElementById('price-car');
var periodIn = document.getElementById('period');
firstIn.addEventListener('change', function() {
    calculate();
});
secondIn.addEventListener('change', function() {
    calculate();
});
periodIn.addEventListener('change', function() {
    calculate();
});

function calculate() {
    var firstPayIn = document.getElementById('first-in').value;
    var week = document.getElementById('first-out');
    var monthly = document.getElementById('month-pay');
    var originalPrice = document.getElementById('price-car').value;
    var period = document.getElementById('period').value;
    var changePrice = originalPrice - firstPayIn;
    var payMonth;

    var result = function result() {
        var dirtySum;

        if (period == 1) {
            dirtySum = changePrice * 1.0698;
        } else if (period == 2) {
            dirtySum = changePrice * 1.1398;
        } else if (period == 3) {
            dirtySum = changePrice * 1.2098;
        } else if (period == 4) {
            dirtySum = changePrice * 1.2565;
        } else if (period == 5) {
            dirtySum = changePrice * 1.3031;
        } else if (period == 6) {
            dirtySum = changePrice * 1.3498;
        } else if (period == 7) {
            dirtySum = changePrice * 1.3931;
        } else if (period == 8) {
            dirtySum = changePrice * 1.4364;
        } else if (period == 9) {
            dirtySum = changePrice * 1.4798;
        } else if (period == 10) {
            dirtySum = changePrice * 1.5198;
        } else if (period == 11) {
            dirtySum = changePrice * 1.5598;
        } else if (period == 12) {
            dirtySum = changePrice * 1.5998;
        }

        payMonth = dirtySum / period;
    };

    result();
    monthly.value = Math.floor(payMonth);
    week.value = Math.floor(payMonth / 4);
}

$(document).ready(function() {
    //E-mail Ajax Send
    $(".calc__form").submit(function() {
        if (originalPrice < 6000) {
            alert('Минимальная цена 6000zl');
            return false
        }
        //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php",
            //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});