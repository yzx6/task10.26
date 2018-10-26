require(["index", "hand", "jquery"], function(index, hand, $) {

    $(".serch").on("input", function() {
        var lokeow = window.localStorage
        var val = $(this).val();

        if (val) {
            $.ajax({
                url: "/api/list?val=" + val,
                dataType: "json",
                success: function(res) {
                    render(res)
                }
            })
            lokeow.setItem("main", val)
            console.log(lokeow.getItem("main"))
                // $(".div").html()

        } else {
            $(".box").html("");
        }

        function render(res) {
            var entry = $("#entry").html()
            var template = hand.compile(entry);
            var html = template(res.data)
            $(".box").html(html)
        }
    })
})