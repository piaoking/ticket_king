package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbLv;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface LvMapper {
    List<TbLv> queryLv();
    void savaLv(TbLv tbLv);
    TbLv queryLvById(@Param("lvId") Integer lvId);
    void updateLv(TbLv tbLv);
}
