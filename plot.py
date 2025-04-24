import matplotlib.pyplot as plt

volumes = [i/100 for i in range(10, 100)]
times = list(map(float, input("Enter the times: \n").split(",")))

with open("output.csv", "w") as file:
    file.write("Volume of water (l), Flight Time(s)\n")
with open("output.csv", "a") as file:
    for i, j in zip(volumes, times):
        file.write(f"{i}, {j}\n")

#print(times, volumes)

plt.plot(volumes, times, marker="x")
plt.ylabel("Flight Time (s)")
plt.xlabel("Volume of water (l)")
plt.grid(True)
plt.show()
