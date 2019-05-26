package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbStar;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StarMapper {
    //查询
    List<TbStar> queryStar();
    //添加
    void saveStar(TbStar tbStar);

    TbStar queryStarId(@Param("starId") Integer starId);

    void updatequery(TbStar tbStar);
}
