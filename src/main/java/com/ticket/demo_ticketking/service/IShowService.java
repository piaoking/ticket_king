package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbShow;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IShowService {
    List<TbShow> queryCity();
    void  saveShow(TbShow tbShow);

    /**
     * id查询
     * @param showId
     * @return
     */
    TbShow queryShowsId(@Param("showId") Integer showId) throws Exception;

    /**
     * 更新
     * @param tbShow
     */
    void updateShows(TbShow tbShow) throws Exception;
}
