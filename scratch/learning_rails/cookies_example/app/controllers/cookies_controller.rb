class CookiesController < ApplicationController
  def example_1
    cookies[:user_name] = "jackloke"
  end

  def example_2
    cookies[:reference_to_keep] = {value: "XJ-122", expires: 1.year.from_now}
  end

  def example_3
    puts cookies.inspect
    cookies.delete :user_name
  end
end
