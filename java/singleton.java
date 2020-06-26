/** 饿汉式 */
public class Singleton {
  private static Singleton instance = new Singleton();
  private Singleton() {}

  public static Singleton getInstance() {
    return instance;
  }

  public void greet() {
    System.out.println("Hello ~");
  }
}

public class SingletonPatternDemo {
  public static void main(String[] args) {
    Singleton s = Singleton.getInstance();
    s.greet();
  }
}