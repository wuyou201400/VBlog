package org.sang.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.sang.bean.Role;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by sang on 2017/12/17.
 */
@Mapper
@Component(value = "rolesMapper")
public interface RolesMapper {
    int addRoles(@Param("roles") String[] roles, @Param("uid") Long uid);

    List<Role> getRolesByUid(Long uid);
}
