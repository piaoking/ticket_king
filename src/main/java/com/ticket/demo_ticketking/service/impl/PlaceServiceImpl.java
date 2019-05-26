package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.PlaceMapper;
import com.ticket.demo_ticketking.po.TbPlace;
import com.ticket.demo_ticketking.service.IPlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PlaceServiceImpl implements IPlaceService {
    @Autowired
    private PlaceMapper placeMapper;
    @Override
    public List<TbPlace> queryPlace() {
        List<TbPlace> tbPlaces = placeMapper.queryPlace();
        return tbPlaces;
    }

    @Override
    public void savaPlace(TbPlace tbPlace) {
        placeMapper.savaPlace(tbPlace);
    }

    @Override
    public TbPlace queryPlaceById(Integer placeId) {
        TbPlace tbPlace = placeMapper.queryPlaceById(placeId);
        return tbPlace;
    }

    @Override
    public void updatePlace(TbPlace tbPlace) throws Exception{
        if(null!=tbPlace){
            placeMapper.updatePlace(tbPlace);
        }else{
            throw new UserIdNotFoundException();
        }


    }
}
