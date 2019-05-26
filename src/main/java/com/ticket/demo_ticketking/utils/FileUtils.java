package com.ticket.demo_ticketking.utils;

import com.ticket.demo_ticketking.vo.JsonResult;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.UUID;

public class FileUtils{

    /**
     * 文件上传
     * @param
     * @return   文件上传后的绝对地址
     */
    public static String uploadFile(MultipartFile photo) throws IOException {
        JsonResult JsonResult = new JsonResult();
        String fileDir = "D:\\nginx-1.10.3\\images\\images";
        File dir = new File(fileDir);
        //判断目录是否存在，不存在则创建目录
        if (!dir.exists()){
            dir.mkdirs();
        }
        //生成新文件名，防止文件名重复而导致文件覆盖
        //1、获取原文件后缀名 .img .jpg ....
        //指定存放上传文件的目录
        String filename = photo.getOriginalFilename();
        String suffix = filename.substring(filename.lastIndexOf('.'));
        //使用UUID生成新文件名
        String newFileName = UUID.randomUUID().toString().replaceAll("-","").substring(0,8) + suffix;
        //生成文件
        File file = new File(dir, newFileName);
        //上传至ftp服务器
        photo.transferTo(file);
        System.out.println("上传文件成功！");
        FTPClient ftp = new FTPClient();
        //连接FTP服务器，默认端口是21
        ftp.connect("192.168.53.21",21);
        //匿名用户必须使用anonymous登录，密码是邮箱
        boolean login = ftp.login("anonymous", "1621530164@qq.com");
        System.out.println(login);
        int replyCode = ftp.getReplyCode();
        if (!FTPReply.isPositiveCompletion(replyCode)) {
            System.out.println("获取响应失败");
            return null;
        }
        /*//服务器上创建images文件夹
        ftp.makeDirectory("cmzc/project");*/

        //切换ftp默认文件夹
        ftp.changeWorkingDirectory("images");

        //设置接收文件类型为二进制文件
        ftp.setFileType(FTPClient.BINARY_FILE_TYPE);

        //开启被动模式（按自己如何配置的ftp服务器来决定是否开启）
        ftp.enterLocalPassiveMode();

        //将用户上传的图片上传到ftp服务器上
        ftp.storeFile(file.getName(),new FileInputStream(file));
        System.out.println(file.getName());
        //退出登录
        ftp.logout();
        //2、删除本地文件
        file.delete();
        JsonResult.setCode(1);
        return newFileName;
    }

//    public static String getString(int length){
//        Random random = new Random();
//        char[] a = {'0','1','2','3','4','5','6','7','8','9',
//                    'A','B','C','D','E','F','G','H','I','J','K','L','M',
//                    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'};
//        int LEN = a.length-1;
//        StringBuilder result = new StringBuilder("");
//        for (int i=0;i<length;i++){
//            result.append(a[random.nextInt(LEN)]);
//        }
//        return result.toString();
//    }
}
