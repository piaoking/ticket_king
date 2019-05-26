package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbPrice;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IPriceService {
    List<TbPrice> queryPrice();
    void savePrice(TbPrice tbPrice);

    TbPrice queryPriceById(@Param("priceId") Integer priceId);

    void updatePrice(TbPrice tbPrice) throws Exception;
}
