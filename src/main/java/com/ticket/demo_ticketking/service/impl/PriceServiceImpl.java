package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.PriceMapper;
import com.ticket.demo_ticketking.po.TbPrice;
import com.ticket.demo_ticketking.service.IPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceServiceImpl implements IPriceService {
    @Autowired
    private PriceMapper priceMapper;
    @Override
    public List<TbPrice> queryPrice() {
        List<TbPrice> tbPrices = priceMapper.queryPrice();
        return tbPrices;
    }

    @Override
    public void savePrice(TbPrice tbPrice) {
        priceMapper.savePrice(tbPrice);
    }

    @Override
    public TbPrice queryPriceById(Integer priceId) {
        TbPrice tbPrice = priceMapper.queryPriceById(priceId);
        return tbPrice;
    }

    @Override
    public void updatePrice(TbPrice tbPrice) throws Exception{
        if(null!=tbPrice){
            priceMapper.updatePrice(tbPrice);
        }else{
            throw new UserIdNotFoundException();
        }

    }
}
