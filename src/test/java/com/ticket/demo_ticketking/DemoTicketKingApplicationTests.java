package com.ticket.demo_ticketking;

import com.ticket.demo_ticketking.mapper.IUserTicketMapper;
import com.ticket.demo_ticketking.po.TbOrder;
import com.ticket.demo_ticketking.po.TbStar;
import com.ticket.demo_ticketking.po.TbUser;
import com.ticket.demo_ticketking.service.*;
import com.ticket.demo_ticketking.vo.BuyTicketVO;
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
    private IUserTicketMapper iUserTicketMapper;
    @Autowired
    private OrderService orderService;
    @Autowired
    private IUserTicketService iUserTicketService;
    @Autowired
    private AddUserService addUserService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private StarService starService;
    @Autowired
    private BuyTicketService buyTicketService;
    @Test
    public void contextLoads() {
        TbUser tbUser = iUserTicketMapper.selectUserTicket(1L);
        System.out.println(tbUser);
    }
    @Test
    public void test1(){
        try {
            TbOrder tbOrder = orderService.queryOrder(1);
            System.out.println(tbOrder);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test2() {
        TbUser tbUser = null;
        try {
            tbUser = iUserTicketService.selectUserTicket(1L);
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println(tbUser.getUserTel());
    }
    @Test
    public void test3(){
        try {
            addUserService.insertAdd(2,"武汉市南湖");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test4(){
        iUserService.insertUser("13111111111","老子");
    }
    @Test
    public void test5(){
        try {
            iUserService.updatePassword("111111",1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test6(){
        try {
            TbUser tbUser = iUserTicketService.selectUserTicket(1);
            System.out.println(tbUser.getUserPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test7(){
        try {
            List<TbStar> tbStars = starService.selectStar(1, 5);
            System.out.println(tbStars);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Test
    public void test8(){
        try {
            List<BuyTicketVO> buyTicketVOS = buyTicketService.queryBuyTicket(1);
            System.out.println(buyTicketVOS);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
