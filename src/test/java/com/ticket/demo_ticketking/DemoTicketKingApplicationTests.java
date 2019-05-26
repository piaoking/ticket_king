package com.ticket.demo_ticketking;


import com.ticket.demo_ticketking.po.TbIntro;
import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.IUserService;
import com.ticket.demo_ticketking.service.OrderBuyService;
import com.ticket.demo_ticketking.service.PayOrderService;
import com.ticket.demo_ticketking.service.SeatService;
import com.ticket.demo_ticketking.vo.OrderBuyVO;
import com.ticket.demo_ticketking.vo.PayOrderVO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoTicketKingApplicationTests {
    @Autowired
    private OrderBuyService orderBuyService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private PayOrderService payOrderService;
    @Autowired
    private SeatService seatService;
    @Test
    public void contextLoads() {
    }
    @Test
    public void test1() throws Exception {
        List<OrderBuyVO> orderBuyVOS = orderBuyService.queryPrice(80, 3);
        System.out.println(orderBuyVOS);
    }

    @Test
    public void test2(){
        TbUser query = null;
        try {
            query = iUserService.query(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(query);

    }
    @Test
    public void test3(){
        TbIntro tbIntro = null;
        try {
            tbIntro = orderBuyService.selectIntroAll(35);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(tbIntro);
    }
    @Test
    public void test4(){
        TbIntro tbIntro = null;
        try {
            PayOrderVO payOrderVO = payOrderService.payOrder("00100");
            System.out.println(payOrderVO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test5(){
        int [][] a = {{12345},{12345},{12345},{12345},{12345}};
        for(int i = 0;i< a.length;i++){
            for(int j=0;j<a[i].length;j++){
                System.out.println(a[i][j]);
            }
        }

    }
    @Test
    public void test6(){
        try {
            TbPlace tbPlace = seatService.querySeat(2);
            System.out.println(tbPlace.getPlaceSeat());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
