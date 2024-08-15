from manim import *

class AddThirdCircle(Scene):
    def construct(self):
        # Create the first circle
        circle1 = Circle().shift(LEFT * 2)
        
        # Position the second and third circles
        circle2 = Circle().shift(0)
        circle3 = Circle().shift(RIGHT * 2)

        # Display the first circle
        self.play(Create(circle1))
        self.wait(1)

        # Fade in circles 2 and 3 and leave them in place
        self.play(FadeIn(circle2), FadeIn(circle3))
        self.wait(1)
