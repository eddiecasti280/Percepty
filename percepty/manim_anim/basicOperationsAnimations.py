from manim import *

class AddThirdCircle(Scene):
    def construct(self):
        circle1 = Circle().shift(LEFT * 2)
        circle2 = Circle().shift(ORIGIN)
        circle3 = Circle().shift(RIGHT * 2)

        self.play(Create(circle1))
        self.wait(1)
        self.play(FadeIn(circle2), FadeIn(circle3))
        self.wait(1)