package com.ticket.demo_ticketking.service.impl;

import com.ticket.demo_ticketking.configuration.UserIdNotFoundException;
import com.ticket.demo_ticketking.mapper.SonMapper;
import com.ticket.demo_ticketking.po.TbSon;
import com.ticket.demo_ticketking.service.ISonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SonServiceImpl  implements ISonService {


    @Autowired
    private SonMapper sonMapper;
    @Override
    public List<TbSon> querySon() {
        List<TbSon> tbSons = sonMapper.querySon();
        return tbSons;
    }

    @Override
    public void savaSon(TbSon tbSon) {
       sonMapper.savaSon(tbSon);
    }

    /**
     * id查询
     * @param sonId
     * @return
     */
    @Override
    public TbSon querySonById(Integer sonId) {
        TbSon tbSon = sonMapper.querySonById(sonId);
        return tbSon;

    }

    /**
     * 更新
     * @param tbSon
     * @throws Exception
     */
    @Override
    public void UpdateSon(TbSon tbSon)throws Exception {
        if(null!=tbSon){
            sonMapper.UpdateSon(tbSon);
        }else{
            throw new UserIdNotFoundException();
        }

    }


}
