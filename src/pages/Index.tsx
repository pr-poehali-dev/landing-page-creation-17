import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const advantages = [
    {
      icon: 'Zap',
      title: 'Быстрая разработка',
      description: 'Современные технологии и agile-подход позволяют запустить проект в кратчайшие сроки'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Тщательное тестирование и контроль качества на всех этапах разработки'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Профессионалы с опытом работы более 10 лет в IT-индустрии'
    },
    {
      icon: 'Lightbulb',
      title: 'Инновации',
      description: 'Используем передовые технологии и лучшие практики разработки'
    }
  ];

  const services = [
    {
      icon: 'Code',
      title: 'Разработка на заказ',
      description: 'Создание веб-приложений, мобильных приложений и корпоративных систем под ключ',
      features: ['Frontend и Backend', 'Мобильные приложения', 'API интеграции']
    },
    {
      icon: 'LineChart',
      title: 'IT-консалтинг',
      description: 'Аудит существующих систем, оптимизация процессов и технологическая стратегия',
      features: ['Аудит инфраструктуры', 'Оптимизация процессов', 'Технологический стек']
    },
    {
      icon: 'Wrench',
      title: 'Поддержка и развитие',
      description: 'Техническая поддержка, обновления и масштабирование готовых решений',
      features: ['24/7 мониторинг', 'Регулярные обновления', 'Масштабирование']
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Иванов',
      company: 'ООО "ТехноПро"',
      text: 'Команда справилась с задачей на отлично. Проект был сдан в срок, все работает стабильно.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      company: 'Финанс Групп',
      text: 'Профессиональный подход, отличное качество кода. Рекомендуем как надежного партнера.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      company: 'Стартап "Инновация"',
      text: 'Помогли с консалтингом и выбором технологий. Экспертиза на высоком уровне.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Code2" size={32} className="text-accent" />
            <span className="text-2xl font-bold">IT Solutions</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent transition-colors">Главная</a>
            <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Связаться</a>
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Разработка и консалтинг<br />
              <span className="text-accent">нового поколения</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Создаем цифровые решения, которые помогают бизнесу расти и достигать целей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="#services">Наши услуги</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="#contact">Обсудить проект</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon name={advantage.icon} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground font-light">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent text-accent-foreground mb-4">
                    <Icon name={service.icon} size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 font-light">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic font-light">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg font-light">
            Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в течение 24 часов
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@itsolutions.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 shadow-lg">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Icon name="Code2" size={32} />
            <span className="text-2xl font-bold">IT Solutions</span>
          </div>
          <p className="text-primary-foreground/80 mb-6 font-light">
            Разработка и консалтинг для вашего успеха
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 IT Solutions. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
