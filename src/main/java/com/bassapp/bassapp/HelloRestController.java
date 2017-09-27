package com.bassapp.bassapp;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloRestController {
	
	@RequestMapping("/board")
	public List<Map<String,Object>> index() {
		
		List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		Map<String,Object> map = null; 
		
		map = new HashMap<String,Object>();
		
		map.put("name", "name-park");
		map.put("email", "email-park");
		map.put("age", "age-park");
		map.put("city", "city-park");
		
		list.add(map);
		
		map = new HashMap<String,Object>();

		map.put("name", "name-kim");
		map.put("email", "email-kim");
		map.put("age", "age-kim");
		map.put("city", "city-kim");
		
		list.add(map);
		
		return list; 
	}
	
}
