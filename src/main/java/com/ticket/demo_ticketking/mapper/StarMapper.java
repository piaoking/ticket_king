package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbStar;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface StarMapper {
     List<TbStar> selectStar(@Param("index1") int index1, @Param("index2") int index2);
}
