package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbAdd;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;
@Mapper
@Component
public interface AddMapper {
    //地址表
    List<TbAdd> queryAdd();
    void savaAdd(TbAdd tbAdd);
    TbAdd queryAddById(@Param("addId") Integer addId);

    void updateAdd(TbAdd tbAdd);
}
