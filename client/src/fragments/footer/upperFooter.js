import React from "react";
import { Divider, TextField } from "@mui/material";
import { Button } from "@eachbase/components";
import { UpperFooterStyled } from "./styles";
import { Colors, Info } from "@eachbase/utils";
import { Images } from "@eachbase/assets";

export const UpperFooter = () => {
    return (
        <UpperFooterStyled>
            <div className="socal-media">
                <div className="socal-la">
                    <h6 className="theme-green">SoCal Air Systems</h6>
                    <span className="quality">
                        {"LA's best pricing & quality"}
                    </span>
                </div>
                <h6 className="follow-container indigo-heading">
                    Follow us:
                    <div className="logos-container">
                        {Object.entries(Images.Logos).map(([title, svg]) => (
                            <img
                                key={title}
                                className={title}
                                src={svg}
                                alt={title}
                            />
                        ))}
                    </div>
                </h6>
            </div>
            <div className="contact-us">
                <h6 className="contact-us-title">Contact us</h6>
                <div className="contact-info">
                    {Object.entries(Info)
                        .filter((_, ind) => !ind || ind > 2)
                        .map(([key, value]) => (
                            <div
                                key={key}
                                className={
                                    "single-info " + "single-info__" + key
                                }
                            >
                                <span className="single-info__key">{key}:</span>{" "}
                                <span className="single-info__value">
                                    {value}
                                </span>
                            </div>
                        ))}
                </div>
                <Divider
                    style={{
                        paddingTop: "24px",
                        color: "#6D82974D",
                    }}
                />
                <div className="availability-info">
                    {Object.entries(Info)
                        .slice(1, 3)
                        .map(([key, value]) => (
                            <div
                                key={key}
                                className={
                                    "single-info " + "single-info__" + key
                                }
                            >
                                <span className="single-info__key">{key}:</span>{" "}
                                <span className="single-info__value">
                                    {value}
                                </span>
                            </div>
                        ))}
                </div>
            </div>
            <div className="newsletter">
                <h6 className="indigo-heading">Subscribe to our newsletter</h6>
                <p className="description">
                    Get the latest insights on HVAC maintenance and deals. We
                    promise not to spam your inbox!
                </p>
                <div className="email-input-container">
                    <TextField
                        fullWidth
                        name="user-email"
                        placeholder="Enter your email address"
                    />
                    <Button
                        className="subscribe-button"
                        bgColor={Colors.ThemeGreen}
                        color={Colors.BackgroundPrimary}
                    >
                        Subscribe
                    </Button>
                </div>
            </div>
        </UpperFooterStyled>
    );
};
