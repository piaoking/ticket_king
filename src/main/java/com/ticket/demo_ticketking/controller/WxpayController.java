package com.ticket.demo_ticketking.controller;

import com.github.wxpay.sdk.WXPayUtil;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.service.OrderService;
import com.ticket.demo_ticketking.service.WxpayService;
import io.goeasy.GoEasy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class WxpayController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private WxpayService wxpayService;

    @RequestMapping("wxorder")
    public void order(Integer orderId , HttpServletResponse response, String baseURL, HttpSession session) throws Exception {
        Long userId = (Long) session.getAttribute("userId");
        TbOrder tbOrder = orderService.queryOrderById(orderId);
        String url = wxpayService.order(tbOrder, baseURL,userId);
        HashMap<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.M);
        //边距
        hints.put(EncodeHintType.MARGIN, 2);
        try {
            //200标识二维码图片的大小
            BitMatrix bitMatrix = new MultiFormatWriter().encode(url, BarcodeFormat.QR_CODE, 200, 200, hints);
            //将生成的图片写入网络输出流
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", response.getOutputStream());
            System.out.println("创建二维码完成");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/pay_notify_url")
    public void receiveWxPlatformMessage(HttpServletRequest request, HttpServletResponse response,HttpSession session) throws IOException {
        Long userId = (Long) session.getAttribute("userId");
        ServletInputStream inputStream = request.getInputStream();
        StringBuilder stringBuilder = new StringBuilder();
        byte[] bytes = new byte[1024];
        int i = 0;
        while ((i = inputStream.read(bytes)) != -1){
            System.out.println(new String(bytes,0,i));
            stringBuilder.append(new String(bytes,0,i));
        }
        try {
            Map<String, String> stringStringMap = WXPayUtil.xmlToMap(stringBuilder.toString());
            wxpayService.orderAfterPay(stringStringMap.get("out_trade_no"),userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        //通知用户支付成功
        GoEasy goEasy = new GoEasy("http://rest-hangzhou.goeasy.io", "BC-82d3f7de164e46ce9347b04494a76336");
        //参数：频道
        goEasy.publish("ticketking", "success");


        //返回参数：告知微信我收到消息了
        response.getWriter().println("<xml>\n" +
                "\n" +
                "  <return_code><![CDATA[SUCCESS]]></return_code>\n" +
                "  <return_msg><![CDATA[OK]]></return_msg>\n" +
                "</xml>");
    }
}
