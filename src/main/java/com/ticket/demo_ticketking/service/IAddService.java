package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbAdd;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface IAddService {
    //地址表
    List<TbAdd> queryAdd();
    void savaAdd(TbAdd tbAdd);
    TbAdd queryAddById(@Param("addId") Integer addId);

    void updateAdd(TbAdd tbAdd) throws Exception;
}
