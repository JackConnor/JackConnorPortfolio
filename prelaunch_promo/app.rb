class PreLaunchPromo < Sinatra::Base
  get("/") do
    erb(:layou)
    # erb :layout
  end
  get("/stuff") do
    erb(:stuff)
  end
end
