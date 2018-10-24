from selenium import webdriver
driver = webdriver.PhantomJS("/usr/local/bin/phantomjs")
driver.get("http://localhost:8080")
print driver.get_log('browser')