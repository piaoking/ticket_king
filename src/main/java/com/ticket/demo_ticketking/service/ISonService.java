package com.ticket.demo_ticketking.service;

import com.ticket.demo_ticketking.po.TbSon;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ISonService {
    List<TbSon> querySon();
    void savaSon(TbSon tbSon);
    /**
     *
     * 按id查询
     * @param sonId
     * @return
     */
    TbSon querySonById(@Param("sonId") Integer sonId);

    /**
     * 更新
     * @param tbSon
     */
    void UpdateSon(TbSon tbSon) throws Exception;
}
