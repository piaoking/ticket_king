package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbPlace;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IPlaceService {
    List<TbPlace> queryPlace();
    void savaPlace(TbPlace tbPlace);

    TbPlace queryPlaceById(@Param("placeId") Integer placeId);
    void updatePlace(TbPlace tbPlace) throws Exception;
}
