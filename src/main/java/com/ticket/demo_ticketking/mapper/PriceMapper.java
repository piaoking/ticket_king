package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbPrice;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface PriceMapper {
    List<TbPrice> queryPrice();
    void savePrice(TbPrice tbPrice);

    TbPrice queryPriceById(@Param("priceId") Integer priceId);

    void updatePrice(TbPrice tbPrice);
}
