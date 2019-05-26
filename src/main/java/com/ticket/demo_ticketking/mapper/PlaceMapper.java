package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbPlace;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;

import java.util.List;

@Mapper
@Component
public interface PlaceMapper {
    List<TbPlace> queryPlace();
    void savaPlace(TbPlace tbPlace);
    TbPlace queryPlaceById(@Param("placeId") Integer placeId);
    void updatePlace(TbPlace tbPlace);
}
