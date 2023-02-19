import { useQuery } from "react-query";
import userRepository from "../../repository/user/user.repository";
import { ParamType } from "../../types/param/param.type";

export const useGetAllPosts = () =>
    useQuery("post/read-all",() => userRepository.getAllPost(),
    {
        staleTime: 1000 * 60 * 60,
        cacheTime: 1000 * 60 * 60,
    });

export const useGetMyPost = ({postId}:ParamType) =>
    useQuery('post/read-one',() => userRepository.getMyPost({postId}),{
        staleTime: 1000 * 60 * 60,
        cacheTime: 1000 * 60 * 60,
    });