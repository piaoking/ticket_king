package com.ticket.demo_ticketking.mapper;

import com.ticket.demo_ticketking.po.TbShow;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface ShowMapper {
    List<TbShow> queryShow();
    void  saveShow(TbShow tbShow);

    /**
     * id查询
     * @param showId
     * @return
     */
    TbShow queryShowsId(@Param("showId") Integer showId);

    /**
     * 更新
     * @param tbShow
     */
    void updateShows(TbShow tbShow);
}
