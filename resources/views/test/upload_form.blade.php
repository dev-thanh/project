<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Laravel</title>
 
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <!-- Styles -->
        <body>
<div class="container">
     

        <div class="header clearfix">
            <nav>
                <ul class="nav nav-pills pull-right">
                        <li role="presentation" class="nav-item"><a href="/tryitnow/">Danh sách</a></li>
                        <li role="presentation" class="nav-item active"><a href="/tryitnow/Home/CreateOrder">Tạo mới</a></li>
                </ul>
            </nav>
            <h3 class="text-muted">VNPAY DEMO</h3>
        </div>
        
<h3>Tạo mới đơn hàng</h3>
<div class="table-responsive">
<form action="{{route('pay-test')}}" id="frmCreateOrder" method="post">        
    {{ csrf_field() }}
    <div class="form-group">
            <label for="language">Loại hàng hóa </label>
            <select name="ordertype" id="ordertype" class="form-control">
                <option value="topup">Nạp tiền điện thoại</option>
                <option value="billpayment">Thanh toán hóa đơn</option>
                <option value="fashion">Thời trang</option>
            </select>
        </div>        
        <div class="form-group">
            <label for="Amount">Số tiền</label>
            <input class="form-control" data-val="true" data-val-number="The field Amount must be a number." data-val-required="The Amount field is required." id="Amount" name="Amount" type="text" value="10000">
        </div>
        <div class="form-group">
            <label for="OrderDescription">Nội dung thanh toán</label>
            <textarea class="form-control" cols="20" id="OrderDescription" name="OrderDescription" rows="2">Thanh toan don hang thoi gian: 2020-06-16 16:12:10</textarea>
        </div>
    <div class="form-group">
        <label for="bankcode">Ngân hàng</label>
        <select name="bankcode" id="bankcode" class="form-control">
            <option value="">Không chọn </option>            
            <option value="VNPAYQR">VNPAYQR</option>
            <option value="VNBANK">LOCAL BANK</option>
            <option value="IB">INTERNET BANKING</option>
            <option value="ATM">ATM CARD</option>
            <option value="INTCARD">INTERNATIONAL CARD</option>
            <option value="VISA">VISA</option>
            <option value="MASTERCARD"> MASTERCARD</option>
            <option value="JCB">JCB</option>
            <option value="UPI">UPI</option>
            <option value="VIB">VIB</option>
             <option value="VIETCAPITALBANK">VIETCAPITALBANK</option>
            <option value="SCB">Ngan hang SCB</option>
            <option value="NCB">Ngan hang NCB</option>
            <option value="SACOMBANK">Ngan hang SacomBank  </option>
            <option value="EXIMBANK">Ngan hang EximBank </option>
            <option value="MSBANK">Ngan hang MSBANK </option>
            <option value="NAMABANK">Ngan hang NamABank </option>
            <option value="VNMART"> Vi dien tu VnMart</option>
            <option value="VIETINBANK">Ngan hang Vietinbank  </option>
            <option value="VIETCOMBANK">Ngan hang VCB </option>
            <option value="HDBANK">Ngan hang HDBank</option>
            <option value="DONGABANK">Ngan hang Dong A</option>
            <option value="TPBANK">Ngân hàng TPBank </option>
            <option value="OJB">Ngân hàng OceanBank</option>
            <option value="BIDV">Ngân hàng BIDV </option>
            <option value="TECHCOMBANK">Ngân hàng Techcombank </option>
            <option value="VPBANK">Ngan hang VPBank </option>
            <option value="AGRIBANK">Ngan hang Agribank </option>
            <option value="MBBANK">Ngan hang MBBank </option>
            <option value="ACB">Ngan hang ACB </option>
            <option value="OCB">Ngan hang OCB </option>
            <option value="IVB">Ngan hang IVB </option>
            <option value="SHB">Ngan hang SHB </option>
        </select>
    </div>
        <div class="form-group">
            <label for="language">Ngôn ngữ</label>
            <select name="language" id="language" class="form-control">
                <option value="vn">Tiếng Việt</option>
                <option value="en">English</option>
            </select>
        </div>
        <button type="submit" class="btn btn-default" id="btnPopup">Thanh toán Popup</button>
    <button type="submit" class="btn btn-default">Thanh toán Redirect</button>
<input name="__RequestVerificationToken" type="hidden" value="XPcxE3kf5LiZTAWF44j8oOPzjMheej_Ki2etelM_zhWqvk90PZYfdqnLu8cJ4GSeINLHMQi73-8thcDtL01vj_yX_ZOVoLT2Q_dxTAVgAg41"></form>
</div>
<p>
    &nbsp;
</p>

        <footer class="footer">
            <p>© VNPAY 2020</p>
        </footer>
    </div> <!-- /container -->
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<!-- <script src="/tryitnow/Styles/js/ie10-viewport-bug-workaround.js"></script> -->
    
<link href="https://pay.vnpay.vn/lib/vnpay/vnpay.css" rel="stylesheet">
<script src="https://pay.vnpay.vn/lib/vnpay/vnpay.js"></script>  
    <script type="text/javascript">
        $("#btnPopup").click(function () {
            var postData = $("#frmCreateOrder").serialize();
            var submitUrl = $("#frmCreateOrder").attr("action");
            console.log(submitUrl);
            $.ajax({
                type: "POST",
                url: submitUrl,
                data: postData,
                dataType: 'JSON',
                success: function (x) {
                    console.log(x); 
                    if (x.code === '00') {                      
                        if (window.vnpay)
                        {
                            vnpay.open({ width: 768, height: 600, url: x.data });
                        }
                        else
                        {
                            window.location = x.data;
                        }
                        return false;
                    } else {
                        alert("Error:" + x.Message);
                    }
                }
            });
            return false;
        });
    </script>
     

<script>
     
</script>


<div id="vnpay_overlay" class="vnpay_overlay" style="display: none;"></div><div id="vnpay_modal" class="vnpay_modal" style="display: none;"><div id="vnpay_content" class="vnpay_content"></div><a id="vnpay_close" href="#" class="vnpay_close">close</a></div></body>
</html>