import turtle

turtle.bgcoloraa('cyan')
ninja = turtle.Turtle()

ninja.speed(17)

for i in range(100):
    ninja.forward(100)
    ninja.right(30)
    ninja.forward(20)
    ninja.left(50)
    ninja.forward(30)

    ninja.pernup()
    ninja.setposition(0.0)

    ninja.right()

    turtle.done()