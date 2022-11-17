package com.example.trojaneat.User;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.trojaneat.registration.token.ConfirmationTokenService;
import com.example.trojaneat.registration.token.ConfirmationToken;
import java.time.LocalDateTime;
import java.util.*;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//
//    }
    private final static String USER_NOT_FOUND_MSG =
            "user with email %s not found";
    @Autowired
    //private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_NOT_FOUND_MSG, email)));
    }

    public String signUpUser(User appUser) {
        boolean userExists = userRepository
                .findByEmail(appUser.getEmail())
                .isPresent();

        if (userExists) {
            throw new IllegalStateException("Email already registered!");
        }
//
//        String encodedPassword = bCryptPasswordEncoder
//                .encode(appUser.getPassword());

        appUser.setPassword(appUser.getPassword());

        userRepository.save(appUser);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );

        confirmationTokenService.saveConfirmationToken(
                confirmationToken);


        return token;
    }

    public int enableAppUser(String email) {
        return UserRepository.enableAppUser(email);
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
