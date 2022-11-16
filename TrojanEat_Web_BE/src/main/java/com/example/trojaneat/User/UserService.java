package com.example.trojaneat.User;

import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {return userRepository.findAll(); }

    public Map<String, Integer> getUserPreferenceById(Long id) {
        User user = userRepository.findUserById(id);
        Map<String, Integer> pref = new HashMap<>();
        if(user.getBeef()>0)
            pref.put("Beef:", user.getBeef());
        if(user.getDiary()>0)
            pref.put("Diary:", user.getDiary());
        if(user.getEggs()>0)
            pref.put("Eggs:", user.getEggs());
        if(user.getShellfish()>0)
            pref.put("Shellfish:", user.getShellfish());
        if(user.getPork()>0)
            pref.put("Pork:", user.getPork());
        if(user.getChicken()>0)
            pref.put("Chicken:", user.getChicken());
        if(user.getFish()>0)
            pref.put("Fish:", user.getFish());
        if(user.getSeasame()>0)
            pref.put("Seasame:", user.getSeasame());
        if(user.getVegan()>0)
            pref.put("Vegan:", user.getVegan());
        return pref;
    }

    public Map<String, Double> getUserRecById(Long id) {
        Double evk = userRepository.getUserEvkRecById(id);
        Double vlg = userRepository.getUserVlgRecById(id);
        Double pks = userRepository.getUserPksRecById(id);
        Map<String, Double> res = new HashMap<>();
        res.put("pks", pks);
        res.put("vlg", vlg);
        res.put("evk", evk);
        return res;
    }

    public void putUserRec(Long id, Date date) {
        Map<String, Integer> userPref = getUserPreferenceById(id);

    }
}
